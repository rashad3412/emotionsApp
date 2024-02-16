"use strict";
// If needed list a call to action...

/* List of Emotions 
Day 1

Make sure to make comments 
Push everything to github
Take about 20-30mins to work on building functions for map and filter if not just move on and figure it out later.
Start to think about how you want the application to look
It can be one page or two.
Plan everything in notion not up here.
Good Job on First offical day back!!!

*/

/* 
Day 2 
First half of the day went great you got a lot of good work and learning done. 
2 half of Day 2 Think about the designing how do you want your project to look?
Think about HTML, CSS, look up unique pages about them and also look up interactiveness with The DOM and JS
See what animation you can do in JS.
YOUTUBE, google and build what you can in the second half of your day.


*/

/*
Day 3 
Work on everything you created in Photoshop, First Half of the day.
Please Dont overthink it. As far as the animations focus on that last try to implement at least 2 nomore than 3.
2nd Half of the day you should work on adding event listeners and such. Your emotions should be buttons you can hover over and click and a modal pops up.
When you the modal pops up it should be an image and a small description and affirmation.
This should pretty much complete the project but you would need to try animations and use the dom and web apis that is what the document.selectquery and so forth
You should also be able to post the data using javascript. Take your time and have fun.

Day 4 This should be your last day. Please try to get the project down you will have time too. Day 3 was a killer a lot of challenges faced but we overcame each one. Im happy with my progress we brought so much to life from planning to Photoshop, and much more. Now its time to use the temperal literals to show case the obejct literals on your applications. Each button should display the emotion type, emotion, description, img, and affirmation. After this is completed you pretty much completed your project. and can move on to an intermidate one. 

*/

//////// List of Emotions /////
const emotion1 = {
  type: "anxiety",
  imgFile: "anxiety.jpg",
  description: "Feeling of fear,dread or hostility",
  affirmations: "In this moment, I am safe and protected.",
};
const emotion2 = {
  type: "boredom",
  imgFile: "bordom.jpg",
  description:
    "Feeling weary because one is unoccupied or lacks interest in current activity.",
  affirmations:
    "I dont compare myself to others. I am living my own version of happy.",
};
const emotion3 = {
  type: "sad",
  imgFile: "sad.jpg",
  description: "Feeling or showing sorrow unhappy.",
  affirmations: "I am resilient in the face on any chanllenge.",
};

const emotion4 = {
  type: "happy",
  imgFile: "happy.jpg",
  description:
    "having a sense of confidence in or satisfaction with (a person, arrangement, or situation)",
  affirmations: "I hold the key to my own happiness",
};
const emotion5 = {
  type: "anger",
  imgFile: "anger.jpg",
  description: "a strong feeling of annoyance, displeasure or hostility",
  affirmations: "My anger is a signal. Time to talk to myself and to relax.",
};
const emotion6 = {
  type: "lonely",
  imgFile: "b_lonely.jpg",
  description: "One has no friends or company.",
  affirmations: "The longest relationship i'll ever have will be with myself..",
};

const allEmotions = [
  emotion1,
  emotion2,
  emotion3,
  emotion4,
  emotion5,
  emotion6,
];

/////// Document Query Selectors ////////

const emotionsBtn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < emotionsBtn.length; i++)
  emotionsBtn[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// for (let i = 0; i < emotionsBtn.length; i++)
//   emotionsBtn[i].addEventListener("click", function () {
//     console.log("button clicked");
//   });

// console.log(happy);
// console.log(sad);

// // Emotion Types....
// const eType = function (type) {
//   const emotionType = type;
//   emotionType.map((emo) =>
//     console.log(
//       ...emo.type
//         .split()
//         .concat(...emo.imgFile)
//         .join(" ")
//         .split(",")
//     )
//   );
// };
// eType(allEmotions);

// // Emotion Description Function
// const eDescriptions = function (description) {
//   const element = description;
//   //   console.log(description);
//   for (const e of element) {
//     if (e.type === "sad") console.log(e.description.toUpperCase());
//   }
// };

// // eDescriptions(allEmotions);

// // // Emotion Affirmation Function
// // const eAffrimations = function (affirmation) {
// //   const element = affirmation;
// //   //   console.log(element);
// //   for (const e of element) {
// //     if (e.type === "lonely")
// //       console.log(
// //         `${e.type.charAt(0).toUpperCase() + e.type.slice(2)}:`,
// //         e.affirmations.toUpperCase()
// //       );
// //   }
// // };

// // eAffrimations(allEmotions);
