
# ChatApp API with .NET 8, SignalR, TypeScript, Angular v19 ui.

This repository showcases a sample API built with .NET 8 that demonstrates the integration of .NET SignalR. .NET SignalR is a library that allows real-time web functionality to your applications, enabling server-side code to instantly push content to connected clients. It's commonly used for applications requiring high-frequency updates like chat applications, live notifications, and collaborative tools.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mizanurrahman13/ChatApp.git
   ```
2. Navigate to the project directory
   ```sh
   cd ChatApp
   ```
3. Restore dependencies:
   ```sh
   dotnet restore
   ```

## Architecture Overview

This template follows the N-Tier Architecture with .NET SignalR.

## Features

- **Built with .NET 8**: Utilizes the latest features for efficient development.
- **SignalR**: SignalR provides real-time web functionality, enabling instant server-to-client updates, perfect for chat applications, live notifications, and collaborative tools.
- **ConcurrentDictionary**: ConcurrentDictionary enables thread-safe operations, allowing simultaneous reads and writes without locks, boosting performance in multi-threaded environments.
- **CORS**: CORS (Cross-Origin Resource Sharing) allows secure access to resources across different origins, enabling seamless integration of web applications and APIs.
- **Angular**: Angular offers a robust framework for building dynamic, single-page applications, featuring two-way data binding, modular structure, and high performance.

## Technologies Used

- **.NET 8**
- **SignalR**
- **ConcurrentDictionary**
- **CORS**
- **Angular**

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
