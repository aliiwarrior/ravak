export const state = () => ({
  goMouse: false,
});
export const mutations = {
  turnOn(state: any) {
    state.goMouse = true;
  },
  turnOff(state: any) {
    state.goMouse = false;
  },
};
