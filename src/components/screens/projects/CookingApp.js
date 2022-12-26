import React from "react";
import classes from "./CookingApp.module.css";

const CookingApp = () => {
  return (
    <section className={classes.cooking__bg}>
      <div className="container">
        <div>
          <h2>The resume</h2>
          <p></p>
        </div>
        <div>
          <h2>The techstack</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus ea minima assumenda architecto officia est dolorem
              nisi vero odio.
            </p>
          </div>
          <div>The Live Site</div>
        </div>

        <div>
          <h2>The Goal</h2>
          <p>
            It seemed like quite a simple one - the goal was that when a user
            adds a recipe he provides info on how many portions will be prepared
            from the ingredients and the quantities listed. This way the visitor
            will be eased when making a meal at home - he would not need to
            calculate how much of each ingredient he should add to make a dinner
            for two when the recipe says it is suitable for 6 people. Doing such
            calculation is annoying and could also end up in a disastrous meal
            as the balance between the ingredients was not kept. The application
            will calculate the exact quantities of the ingredients he needs to
            add for the number of people he will be booking.
          </p>
        </div>
        <div>
          <h2>The Challenges</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus ea minima assumenda architecto officia est dolorem nisi
            vero odio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CookingApp;
