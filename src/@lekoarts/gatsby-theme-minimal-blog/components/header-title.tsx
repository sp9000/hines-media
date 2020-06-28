/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "../utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import bigLogo from "../../../../static/bigLogo-blue-light.png"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <img src={bigLogo} alt="footer logo takes you home" />
      <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [1, 2] }}>{siteTitle}</h1>
    </Link>
  )
}

export default HeaderTitle
