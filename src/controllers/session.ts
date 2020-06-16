async function sessionController(driver) {
  try {
    await driver.quit();
  } catch (error) {
    console.error(error);
  }
}

export { sessionController };
