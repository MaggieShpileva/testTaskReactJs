import { render, screen, waitFor } from "@testing-library/react";
import { Bonus } from "../components/Bonus";
import { Clients, Ibonus } from "../Requests/ProfileRequests";

jest.mock("react-cookie", () => ({
  useCookies: jest.fn(() => [{ access_token: "mockedAccessToken" }, jest.fn()]),
}));

jest.mock("../Requests/ProfileRequests", () => ({
  Clients: jest.fn(() =>
    Promise.resolve("93916da7-516d-408a-a230-ebc5e868c206")
  ),
  Ibonus: jest.fn(() =>
    Promise.resolve({
      data: {
        currentQuantity: 150,
        dateBurning: "2024-02-27T18:18:00",
        forBurningQuantity: 150,
        typeBonusName: "",
      },
      resultOperation: {
        codeResult: 0,
        duration: 0,
        idLog: "00000000-0000-0000-0000-000000000000",
        message: "",
        messageDev: null,
        status: 0,
      },
    })
  ),
}));

test("request bonuses", async () => {
  const mockResult = {
    data: {
      currentQuantity: 150,
      dateBurning: "2024-02-27T18:18:00",
      forBurningQuantity: 150,
      typeBonusName: "",
    },
  };
  render(<Bonus />);
  await waitFor(() => {
    expect(Clients).toHaveBeenCalledTimes(1);
    expect(Ibonus).toHaveBeenCalledTimes(1);
  });
  const headline = screen.queryByTestId("active_bonuses");
  if (headline) {
    expect(headline).toHaveTextContent(
      `${mockResult.data.currentQuantity} бонусов`
    );
  } else {
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  }
});
