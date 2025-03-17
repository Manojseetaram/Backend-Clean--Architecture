import { GetUser } from "../usecases/GetUser";
import { UserRepository } from "../interfaces/UserRepository";

const mockRepo: UserRepository = {
  findById: jest.fn().mockResolvedValue({ id: "1", name: "John", email: "john@test.com" }),
  create: jest.fn(),
};

test("should return user by ID", async () => {
  const getUser = new GetUser(mockRepo);
  const user = await getUser.execute("1");
  expect(user).toBeDefined();
  expect(user?.name).toBe("John");
});
