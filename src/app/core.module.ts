import { NgModule } from '@angular/core';
import { ShoppingListService } from './components/shopping-list/shopping-list.service';
import { RecipeService } from './components/recipes/recipes.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { LoggingService } from './logging.service';

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
        ] 
})
export class CoreModule{

}