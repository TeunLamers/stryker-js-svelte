import { expect } from 'chai';
import {start} from '../core/job';

describe(start.name, () => {
  it('should format a correct message', () => {
    // Act
    const result = start();

    // Assert
    expect(result).eq("Starting job");
  });
});
