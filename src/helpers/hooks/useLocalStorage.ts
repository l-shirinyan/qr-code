import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { IGeneratedQr } from "../../../src/components/home/model";

interface IParameters {
  storageName: string;
  apiRequest: (url: string) => Promise<any>;
  onError:
    | ((
        error: {
          response: {
            status: number;
          };
        },
        variables: string,
        context: unknown
      ) => unknown)
    | undefined;
}

export const useLocalStorage = <T>({
  storageName,
  apiRequest,
  onError,
}: IParameters) => {
  const [data, setData] = useState<IGeneratedQr>();

  useEffect(() => {
    const localData = localStorage.getItem(storageName);
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  return {
    mutate: useMutation({
      mutationFn: apiRequest,
      onError,
      onSuccess: (data) => {
        setData(data);
        localStorage.setItem(storageName, JSON.stringify(data));
      },
    }),
    data,
  };
};
