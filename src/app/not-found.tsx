import AppLink, { LinkColor, LinkTheme } from "@/shared/ui/Link/AppLink";

export default function NotFound() {
  return (
    <div className="error_page">
      <h2>{"Страница не найдена :("}</h2>
      <AppLink color={LinkColor.SECONDARY} theme={LinkTheme.BUTTON} href="/">
        Вернуться на главную страницу
      </AppLink>
    </div>
  );
}
