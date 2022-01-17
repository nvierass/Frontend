const {Builder,By ,Key,util} = require("selenium-webdriver");
const assert = require('assert');

// Test 1
async function agregarProductosTrue () {
  let driver =await new Builder().forBrowser("chrome").build();
  try{
    await driver.get("http://localhost:3000");
    const nameProducto = await driver.findElement(By.id("nameProducto"));
    nameProducto.sendKeys("coca cola");
    const fecha= await driver.findElement(By.id("fechaV"));
    fecha.sendKeys("2021-12-01");
    
    const Precio=driver.findElement(By.id("precio"));
    driver.findElement(By.id('categoria')).sendKeys('Nacional');
    Precio.sendKeys("1990");
    const boton=driver.findElement(By.id("botonIngresar"));
    boton.click();
    const flag=0;

  }finally{
    await driver.quit();
  }

}agregarProductosTrue();

// Test 2
async function borrarTodosProductosTrue () {
  let driver =await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  try{
  const boton=driver.findElement(By.id("borrar-producto"));
  boton.click();


  }finally{
    await driver.quit();
  }

}borrarTodosProductosTrue();

// Test 3
async function borrarProductoTrue () {
  let driver =await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  try{
  const botonEliminarTodos=driver.findElement(By.id("boton-borrar-todos"));
  botonEliminarTodo.click();


  }finally{
    await driver.quit();
  }

}borrarProductoTrue();





