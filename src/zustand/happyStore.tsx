import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type happyStoreStateType = {
  happys: number;

  happysUp: () => void;

  showHappys: () => void;
};

// const logger =
//   <T extends happyStoreStateType>(config: StateCreator<T>): StateCreator<T> =>
//   (set, get, api) =>
//     config(
//       (args) => {
//         console.log("前の状態: ", get().happys);
//         set(args);
//         console.log("次の状態: ", get().happys);
//       },
//       get,
//       api
//     );

const useHappyStore = create<happyStoreStateType>()(
  immer((set, get) => ({
    happys: 0,

    happysUp: () =>
      set((state) => {
        state.happys++;
      }),

    showHappys: () => alert(`Current happys: ${get().happys}`),
  }))
);

export { useHappyStore };
