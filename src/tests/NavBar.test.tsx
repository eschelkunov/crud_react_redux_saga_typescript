import React from "react";
import { shallow } from "enzyme";
import { NavBar } from "../components/NavBar";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<NavBar/>", () => {
  it("renders Home label", () => {
    const wrapper = shallow(<NavBar />);
    const text = wrapper.find("div>div");
    expect(text.text()).toBe("Home");
  });

  it("renders Todo list page link", () => {
    const wrapper = shallow(<NavBar />);
    const text = wrapper.find("NavLink#todoList");
    expect(text.text()).toBe("Todo list");
  });

  it("renders About page link", () => {
    const wrapper = shallow(<NavBar />);
    const text = wrapper.find("NavLink#about");
    expect(text.text()).toBe("About");
  });
});
