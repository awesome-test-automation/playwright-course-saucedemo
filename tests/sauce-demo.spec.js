import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Swag Labs");
});

test("login with standard_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
});

test("login with locked_out_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
});

test("login with problem_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('problem_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
});

test("login with performance_glitch_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('performance_glitch_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
});

test("login with error_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('error_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
});

test("login with visual_user", async({ page }) => {
    await page.getByPlaceholder('Username').fill('visual_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
});

test.afterEach(async({ page }, testInfo) => {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
});