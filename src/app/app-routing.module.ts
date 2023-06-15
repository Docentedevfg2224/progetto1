import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServerEditComponent } from "./server-edit/server-edit.component";
import { ServersComponent } from "./servers/servers.component";

const routes: Routes = [
    {
        path: 'server-edit',
        component: ServerEditComponent
    },

    {
        path: 'servers',
        component: ServersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}