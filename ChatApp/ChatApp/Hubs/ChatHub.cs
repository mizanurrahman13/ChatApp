using ChatApp.Api.DataService;
using ChatApp.Api.Entities;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Api.Hubs;

public class ChatHub: Hub
{
    private readonly SharedDbContext _dbContext;

    public ChatHub(SharedDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task JoinRoom(UserRoomConnection userRoomConnection)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, userRoomConnection.ChatRoomName!);

        _dbContext.connections[Context.ConnectionId] = userRoomConnection;

        await Clients.Group(userRoomConnection.ChatRoomName!)
            .SendAsync("ReceiveMessage", "Lets Program Bot", $"{userRoomConnection.UserName} has Joined the Group", DateTime.Now);

        await SendConnectedUser(userRoomConnection.ChatRoomName!);
    }

    public async Task SendMessage(string message)
    {
        if (_dbContext.connections.TryGetValue(Context.ConnectionId, out UserRoomConnection? userRoomConnection))
        {
            await Clients.Group(userRoomConnection.ChatRoomName!)
                .SendAsync("ReceiveMessage", userRoomConnection.UserName, message, DateTime.Now);
        }
    }

    public override Task OnDisconnectedAsync(Exception? exp)
    {
        if (!_dbContext.connections.TryGetValue(Context.ConnectionId, out UserRoomConnection? roomConnection))
        {
            return base.OnDisconnectedAsync(exp);
        }

        _dbContext.connections.TryRemove(Context.ConnectionId, out UserRoomConnection? roomConnection2);

        Clients.Group(roomConnection.ChatRoomName!)
            .SendAsync("ReceiveMessage", "Lets Program bot", $"{roomConnection.UserName} has Left the Group", DateTime.Now);
        SendConnectedUser(roomConnection.ChatRoomName!);

        return base.OnDisconnectedAsync(exp);
    }

    public Task SendConnectedUser(string room)
    {
        var users = _dbContext.connections.Values
            .Where(u => u.ChatRoomName == room)
            .Select(s => s.UserName);
        return Clients.Group(room).SendAsync("ConnectedUser", users);
    }
}
