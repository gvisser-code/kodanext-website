import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function DELETE() {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  // Verwijder CV uit storage
  await supabase.storage.from("cvs").remove([`${user.id}/cv.pdf`, `${user.id}/cv.docx`]);

  // Verwijder auth user (cascade verwijdert ook profiles rij)
  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
