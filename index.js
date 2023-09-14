function convertToContentBlockerFormat(dataStream) {
  const lines = dataStream.split("\n");
  const hosts = [];

  for (const line of lines) {
    if (line.startsWith("0.0.0.0")) {
      const address = line.split(/\s+/)[1];
      const formattedHost = {
        trigger: {
          urlFilter: address,
        },
        action: {
          type: "block",
        },
      };
      hosts.push(formattedHost);
    }
  }

  return hosts;
}

export { convertToContentBlockerFormat };
