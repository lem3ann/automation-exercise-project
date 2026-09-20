import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
    // NAVLINKS
    navLinks: Record<string, Locator> = {
        home: this.getByLink("Home"),
        products: this.getByLink("Products"),
        cart: this.getByLink("Cart"),
        signup_login: this.getByLink("Signup / Login"),
        test_case: this.getByLink("Test Cases").first(),
        api: this.getByLink("API Testing").first(),
        video_tutorials: this.getByLink("Video Tutorials"),
        contact_us: this.getByLink("Contact us"),
    }
    // OPEN FUNCTION
    async open() {
        if (!process.env.WEB_BASEURL) {
            return
        }
        await this.page.goto(process.env.WEB_BASEURL)
    }
    // MAIN PAGE CATEGORIES ,SIDEBAR ELEMENTS 
    mainPageSideBar = [
        "CATEGORY",
        "BRANDS",
        "Features Items",
    ];

}



