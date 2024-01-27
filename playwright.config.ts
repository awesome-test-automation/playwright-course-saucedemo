import { defineConfig } from "@playwright/test";

export default defineConfig({
    reporter: 'allure-playwright',
    projects: [
        {
            name: 'chromium',
            use: {
                video: 'on',
                screenshot: "on",
                headless: false,
            }
        }
    ],
    use: {
        baseURL: 'https://www.saucedemo.com',
    }
});