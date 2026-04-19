import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup";


Given('user is on the enrollment page', async function () {
    await startApplicationPage.login();
});

Given('user has completed step one with valid information', async function () {
    await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
    await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
    await startApplicationPage.emailInputBox.fill(faker.internet.email());
    await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(10));
    await startApplicationPage.nextButton.click();
});