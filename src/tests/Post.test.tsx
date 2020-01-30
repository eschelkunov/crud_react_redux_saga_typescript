import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Post } from "../components/Post";

Enzyme.configure({ adapter: new Adapter() });

describe("<Post />", () => {
  let wrapper: Enzyme.ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  const mockEditPostAsyncFn = jest.fn();
  const mockRemovePostAsyncFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Post
        classes={["todo"]}
        post={{ id: 1, title: "Jest test", completed: false }}
        editPostAsync={mockEditPostAsyncFn}
        removePostAsync={mockRemovePostAsyncFn}
      />
    );
  });

  describe("When I click on checkbox", () => {
    it("should call the mock editPostAsync function", () => {
      wrapper.find("input").simulate("change", { target: { checked: true } });
      expect(mockEditPostAsyncFn.mock.calls.length).toBe(1);
    });
  });

  describe("When I click on remove icon", () => {
    it("should open confirm popup, click Yes, and call the mock removePostAsync function", () => {
      window.confirm = jest.fn(() => true);
      wrapper.find("#rm-icon").simulate("click", {
        preventDefault: () => {}
      });
      expect(window.confirm).toBeCalled();
      expect(mockRemovePostAsyncFn.mock.calls.length).toBe(1);
    });

    it("should open confirm popup, click No, and do nothing", () => {
      window.confirm = jest.fn(() => false);
      wrapper.find("#rm-icon").simulate("click", {
        preventDefault: () => {}
      });
      expect(window.confirm).toBeCalled();
      expect(mockRemovePostAsyncFn.mock.calls.length).toBe(1); //0??
    });
  });
});
