export default function Layout(props) {
  console.log(props);
  const { children } = props; // expect the children

  return (
    <>
      <header>
        <h1 className="text-gradient">Brother!! Build Your VOCAB :) </h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>Created by</small>
        <a target="_blank" href="https://github.com/bhar007-neel">
          <p>@Neel</p>

          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}
