import { redirect } from "next/navigation";

export default function AboutOldRedirect() {
  redirect(encodeURI("/درباره-ما"));
}
