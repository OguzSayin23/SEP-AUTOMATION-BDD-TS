import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

Then("the next button will be enabled", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

When("user selects {string} payment option", async function (string) {
  await paymentPlanPage.selectPaymentPlan(string);
});

When("user selects {string} payment plan", async function (string) {
  await paymentPlanPage.selectPaymentPlan(string);
});

When("user clicks on the next button", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the Review step stepper should be blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

Then("the Payment Plan step stepper should be green", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the Start Application step stepper should be green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the upfront payment plan summary is displayed", async function () {
  await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.subtotalTextUnderUpfront).toBeVisible();
});

Then("the installments payment plan summary is displayed", async function () {
  await expect(
    paymentPlanPage.installmentsNumberUnderInstallments,
  ).toBeVisible();
  await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
  await expect(
    paymentPlanPage.pricePerInstallmentsAmountUnderInstallments,
  ).toBeVisible();
});

Then("the back button is displayed and enabled", async function () {
  await expect(paymentPlanPage.backButton).toBeVisible();
  await expect(paymentPlanPage.backButton).toBeEnabled();
});

When("user clicks on the back button", async function () {
  await paymentPlanPage.backButton.click();
});

Then(
  "user should be navigated back to start application step",
  async function () {
    await expect(
      startApplicationPage.flexiblePaymentsPlanAvailableText,
    ).toBeVisible();
  },
);
