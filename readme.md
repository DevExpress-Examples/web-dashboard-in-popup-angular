<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/306319518/21.1.7%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T942298)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Dashboard for Angular - How to display the Web Dashboard in a popup

This example illustrates how to use the Angular-based `dx-dashboard-control` component to diplay a dashboard in the [DevExtreme Popup widget](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPopup/).

![web-dashboard-angular-popup](web-dashboard-angular-popup.png)

See the following files for implementation details:

- [app.component.html](./dashboard-angular-app/src/app/app.component.html)
- [app.component.ts](./dashboard-angular-app/src/app/app.component.ts)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server up to a minor version.

- The [asp-net-core-server](asp-net-core-server) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-angular-app](dashboard-angular-app) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

The server starts at `http://localhost:5000` and the client gets data from `http://localhost:5000/api/dashboard`. To debug the server, run the **asp-net-core-server** application in Visual Studio and change the client's `endpoint` property according to the listening port: `https://localhost:44396/api/dashboard`.

See the following section for information on how to install NuGet packages from the DevExpress NuGet feed: [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages).

> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-angular-app** folder, run the following commands:

```
npm start
```

Open ```http://localhost:4200/``` in your browser to see the result.

## Documentation
- [Add Web Dashboard to an Angular CLI Application](https://docs.devexpress.com/Dashboard/400409)
- [Dashboard Component for Angular](https://docs.devexpress.com/Dashboard/401976)
- [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)
- [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages)

## Examples
- [Get Started - Client-Side Dashboard Application built with Angular](https://github.com/DevExpress-Examples/dashboard-angular-app)
- [Dashboard Component for Angular - Configuration](https://github.com/DevExpress-Examples/dashboard-angular-example)
- [Dashboard Component for React - How to display the Web Dashboard in a popup](https://github.com/DevExpress-Examples/web-dashboard-in-popup-react)
