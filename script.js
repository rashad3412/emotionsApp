"use strict";
// If needed list a call to action...

/* List of Emotions 


Make sure to make comments 
Push everything to github
Take about 20-30mins to work on building functions for map and filter if not just move on and figure it out later.
Start to think about how you want the application to look
It can be one page or two.
Plan everything in notion not up here.
Good Job on First offical day back!!!

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

const type = function (type) {
  const emotionType = type;
  emotionType.map((emo) =>
    console.log(
      ...emo.type
        .split()
        .concat(...emo.imgFile)
        .join(" ")
        .split(",")
    )
  );
};
type(allEmotions);

// This can be used to identify user input.
const filter = allEmotions.filter(function (type) {
  if (type.type === "sad") {
    console.log(...emotion3.description.toUpperCase().split(" "));
  } else {
    return " ";
  }
});
