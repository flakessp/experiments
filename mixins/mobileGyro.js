export const mobileGyro = {
  data() {
    return {
      m: {
        // Position Variables
        x: 0,
        y: 0,
        // Speed - Velocity
        vx : 0,
        vy : 0,

        // Acceleration
        ax : 0,
        ay : 0,

        delay : 10,
        vMultiplier : 0.01
      }
    }
  },
  mounted() {
    window.addEventListener('devicemotion', this.handleDeviceMotion)
  },
  methods: {
    handleDeviceMotion(event) {
      this.m.ax = event.accelerationIncludingGravity.x;
      this.m.ay = event.accelerationIncludingGravity.y;
    }
  }
}