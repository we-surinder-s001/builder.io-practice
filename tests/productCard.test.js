// ProductCard.spec.js
import { mount } from "@vue/test-utils";
import ProductCard from "../components/Products/ProductCard.vue"; // Adjust the import path based on your project structure

// Stubbing NuxtLink
const NuxtLinkStub = {
    name: 'NuxtLink',
    template: '<a></a>',
  };

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    const product = {
      id: 1,
      title: "Example Product",
      image: "example.jpg",
    };

    const wrapper = mount(ProductCard, {
      props: {
        product,
      },
    });

    // Assert that the component renders the product title
    expect(wrapper.find(".font-bold").text()).toBe(product.title);

    // Assert that the component renders the product image
    expect(wrapper.find(".thumb").attributes("src")).toBe(product.image);

    // You can add more assertions based on your component's structure
  });

  // Add more test cases as needed
});
