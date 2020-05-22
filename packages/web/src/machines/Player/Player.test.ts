// import { Machine } from 'xstate';
// import { createModel } from '@xstate/test';

// import Player from './Player';

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Player", () => {
  it("sum", () => {
    function sum(a, b) {
      return a + b;
    }
    expect(sum(1, 2)).toBe(3);
  });
  // const testModel = createModel(Player, {
  //   events: {
  //     RETRY: ({ getByText }) => {
  //       fireEvent.click(getByText('idle'));
  //     }
  //   }
  // });

  // const testPlans = testModel.getSimplePathPlans();

  // testPlans.forEach(plan => {
  //   describe(plan.description, () => {
  //     afterEach(cleanup);

  //     plan.paths.forEach(path => {
  //       it(path.description, () => {
  //         const rendered = render(<Feedback />);
  //         return path.test(rendered);
  //       });
  //     });
  //   });
  // });

  // it('coverage', () => {
  //   testModel.testCoverage();
  // });
});
