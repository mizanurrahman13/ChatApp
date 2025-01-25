using ChatApp.Api.Entities;
using System.Collections.Concurrent;

namespace ChatApp.Api.DataService;

public class SharedDbContext
{
    private readonly ConcurrentDictionary<string, UserRoomConnection> _connections = new();

    public ConcurrentDictionary<string, UserRoomConnection> connections => _connections;
}
