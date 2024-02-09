import { test, expect } from '@playwright/test'

test('update user using put', async ({ request }) => {
    const userUpdate = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            name: "Svitlana",
            job: "QA engineer",
        }
    });
    expect(userUpdate.ok()).toBeTruthy();

    expect(userUpdate.status()).toBe(200);

    const response = await userUpdate.json();
    expect(await response.name).toBe("Svitlana");
    expect(await response.job).toBe("QA engineer");
});

test('update user using patch', async ({ request }) => {
    const userUpdatePatch = await request.patch(`https://reqres.in/api/users/2`, {
        data: {
            name: "Svitlana Ponomarenko",
            job: "new QA engineer",
        }
    });
    expect(userUpdatePatch.ok()).toBeTruthy();

    expect(userUpdatePatch.status()).toBe(200);

    const response = await userUpdatePatch.json();
    expect(await response.name).toBe("Svitlana Ponomarenko");
    expect(await response.job).toBe("new QA engineer");
});

test('delete user', async ({ request }) => {
    const issues = await request.delete(`https://reqres.in/api/users/2`);
    expect(issues.ok()).toBeTruthy();
    expect(issues.status()).toBe(204);
});