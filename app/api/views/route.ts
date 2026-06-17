import { NextResponse } from "next/server";
import pool from "@/lib/db";

// GET — solo leer el contador sin incrementar
export async function GET() {
    try {
        const { rows } = await pool.query("SELECT count FROM page_views WHERE id = 1");
        return NextResponse.json({ count: Number(rows[0]?.count ?? 0), ok: true });
    } catch {
        // BD no disponible — el sitio sigue funcionando
        return NextResponse.json({ count: 0, ok: false });
    }
}

// POST — incrementar y devolver el nuevo valor
export async function POST() {
    try {
        const { rows } = await pool.query(
            "UPDATE page_views SET count = count + 1 WHERE id = 1 RETURNING count"
        );
        return NextResponse.json({ count: Number(rows[0]?.count ?? 0), ok: true });
    } catch {
        // BD no disponible — el sitio sigue funcionando
        return NextResponse.json({ count: 0, ok: false });
    }
}
