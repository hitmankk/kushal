const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'DSA', 'Node.js', 'Wordpress',
    'Cloud Computing', 'MySQL', 'data mining',
];

function adjustRadius() {
  var radius = window.innerWidth >= 700 ? 125 : 250;
  return radius;
}

var tagCloud = TagCloud('.content', myTags, {
  // radius in px
  radius: adjustRadius(),


  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;