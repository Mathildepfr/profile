import { getTime } from "./animation/time";
import { makeSound } from "./animation/sound";
import { createMap } from "./animation/map";

getTime()
makeSound()
createMap()

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

import { Application } from "stimulus"
import Carousel from "stimulus-carousel"

const application = Application.start()
application.register("carousel", Carousel)
