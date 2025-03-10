import { CaliforniaPizzaStore } from "./pizza-store/california"
import { ChicagoPizzaStore } from "./pizza-store/chicago"
import { NYSPizzaStore } from "./pizza-store/new-york"

const nyStore = new NYSPizzaStore()
nyStore.orderPizza("cheese")

const chicagoStore = new ChicagoPizzaStore()
chicagoStore.orderPizza("cheese")

const californiaStore = new CaliforniaPizzaStore()
californiaStore.orderPizza("cheese")
 