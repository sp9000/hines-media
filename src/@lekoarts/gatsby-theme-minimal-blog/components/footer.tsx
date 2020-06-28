/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import logo from '../../../../static/hines-logo-color-bw.png'; // gives image path

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by Hines Media Family, LLC. All rights reserved.
      </div>
      <div>
        <Link aria-label="Link to home" href="/">
          <img src={logo} alt="footer logo takes you home" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
