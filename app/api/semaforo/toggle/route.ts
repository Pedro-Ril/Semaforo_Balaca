import { NextResponse } from "next/server";

const BASE_URL = "http://proserver.trielht.com.br:4005/prodconnect/api";

export async function POST() {
  try {
    const response = await fetch(`${BASE_URL}/semaforo/toggle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: "Falha ao comunicar com o backend." },
      { status: 500 }
    );
  }
}