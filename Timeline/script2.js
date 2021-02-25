let timeline = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

timeline.from("#slider1", 3, {
  x: 500,
  opacity: 0,
  ease: "power3.in",
  autoKill: false,
});
timeline.from("#slider2", 3, {
  x: -500,
  opacity: 0,
  ease: "power3.in",
  autoKill: false,
});
timeline.from("#slider3", 3, {
  x: 500,
  opacity: 0,
  ease: "power3.in",
  autoKill: false,
});
timeline.from("#slider4", 3, {
  x: -500,
  opacity: 0,
  ease: "power3.in",
  autoKill: false,
});
timeline.from("#slider5", 3, {
  x: 500,
  opacity: 0,
  ease: "power3.in",
  autoKill: false,
});

// autoKill:false - lai neiestrēgst

const scene = new ScrollMagic.Scene({
  triggerElement: ".trigger",
  triggerHook: "onCenter",
  duration: "300%",
})

  .setTween(timeline)
  .addTo(controller);

function updatePercentage() {
  timeline.progress();
  console.log(timeline.progress());
}
