import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Post } from "../components/Post";

Enzyme.configure({ adapter: new Adapter() });

describe("<Post />", () => {
  let wrapper: Enzyme.ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  describe("When I click on checkbox", () => {
    const mockEditPostAsyncFn = jest.fn();
    const mockRemovePostAsyncFn = jest.fn();
    wrapper = shallow(
      <Post
        classes={["todo"]}
        post={{ id: 1, title: "Jest test", completed: false }}
        editPostAsync={mockEditPostAsyncFn}
        removePostAsync={mockRemovePostAsyncFn}
      />
    );
    it("should call the mock editPostAsync function", () => {
      wrapper.find("input").simulate("change", { target: { checked: true } });
      expect(mockEditPostAsyncFn.mock.calls.length).toBe(1);
    });
  });

  describe("When I click on remove icon", () => {
    const mockEditPostAsyncFn = jest.fn();
    const mockRemovePostIsCalled = jest.fn();
    const mockRemovePostIsNotCalled = jest.fn();

    const positiveCaseWrapper = shallow(
      <Post
        classes={["todo"]}
        post={{ id: 1, title: "Jest test", completed: false }}
        editPostAsync={mockEditPostAsyncFn}
        removePostAsync={mockRemovePostIsCalled}
      />
    );
    const negativeCaseWrapper = shallow(
      <Post
        classes={["todo"]}
        post={{ id: 1, title: "Jest test", completed: false }}
        editPostAsync={mockEditPostAsyncFn}
        removePostAsync={mockRemovePostIsNotCalled}
      />
    );

    it("should open confirm popup, click Yes, and call the mock removePostAsync function", () => {
      window.confirm = jest.fn(() => true);
      positiveCaseWrapper.find("#rm-icon").simulate("click", {
        preventDefault: () => {}
      });
      expect(window.confirm).toBeCalled();
      expect(mockRemovePostIsCalled.mock.calls.length).toBe(1);
    });

    it("should open confirm popup, click No, and do nothing", () => {
      window.confirm = jest.fn(() => false);
      negativeCaseWrapper.find("#rm-icon").simulate("click", {
        preventDefault: () => {}
      });
      expect(window.confirm).toBeCalled();
      expect(mockRemovePostIsNotCalled.mock.calls.length).toBe(0);
    });
  });
});
