import { test, expect } from '@playwright/test';


test("Count = 0", async ({ page }) => {
  await page.goto('http://localhost:5173/')
  
  const countValue = await page.innerText('button')

  expect(countValue).toContain('0')
})

test("click work", async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await page.click('button')
  await page.click('button')

  const countValue = await page.innerText('button')

  expect(countValue).toContain('2')
})
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/