import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHome(): string;
}
export declare class UserController {
    private readonly appService;
    constructor(appService: AppService);
    getUser(): any;
}
