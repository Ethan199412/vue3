import { onMounted, ref } from "vue";

interface ICar {
  name: string;
  seat: number;
  price: number;
}
export const useCar = () => {
  const car = ref<ICar>({
    name: "比亚迪",
    seat: 5,
    price: 200000,
  });

  onMounted(() => {
    console.log("mounted");
  });

  return { car };
};
