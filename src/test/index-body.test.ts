import  { SequentialRequest } from "..";

test("Two simple get request", async () => {
  const config: IOpConfig = {
    VERSION: "0.0.1",
    BASE: `https://someurl.com`,
  };

  const operations: OpRequest[] = [
    {
      POST: "/type/string",
      BODY: '{"test":"deneme"}',
    },
    {
      POST: "/type/object",
      BODY: {
        test: "deneme",
      },
    },
  ];

  const myFetch = jest.fn((url, params) => {
    expect(params.body).toEqual('{"test":"deneme"}');

    return Promise.resolve({
      json: () => Promise.resolve({}),
      headers: {
        "content-type": "application/json",
      },
      ok: true,
      status: 200,
    });
  });

  const seqreq = new SequentialRequest( config,operations,myFetch);

  await seqreq.execute();
  expect(myFetch).toBeCalledTimes(2);
});