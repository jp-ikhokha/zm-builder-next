import styles from './Footer.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { SectionCurve } from '../SectionCurves/SectionCurve'

const FaceBookIcon = dynamic(() =>
  import('../SocialIcons/socialIcons').then((mod) => mod.FaceBookIcon)
)

const InstagramIcon = dynamic(() =>
  import('../SocialIcons/socialIcons').then((mod) => mod.InstagramIcon)
)

const LinkedInIcon = dynamic(() =>
  import('../SocialIcons/socialIcons').then((mod) => mod.LinkedInIcon)
)

const Footer = ({ footerLinks }) => {
  return (
    <>
      <div className={styles.footerTopCurve}>
        <SectionCurve />
      </div>
      <footer className="footer">
        <div className={styles.footer__topRow}>
          <div className={`${styles.footerColA} ${styles.footerCol}`}>
            <h3>{footerLinks[0].data.footerCol1.colTitle}</h3>
            {footerLinks[0].data.footerCol1.links.map((aLink) => (
              <a href={aLink.linkUrl}>{aLink.linkLabel}</a>
            ))}
          </div>
          <div className={`${styles.footerColB} ${styles.footerCol}`}>
            <h3>{footerLinks[0].data.footerCol2.colTitle}</h3>
            {footerLinks[0].data.footerCol2.links.map((aLink) => (
              <a href={aLink.linkUrl}>{aLink.linkLabel}</a>
            ))}
          </div>
          <div className={` ${styles.footerColC} ${styles.footerCol}`}>
            <img src="/images/zm-logo.svg" alt="zm logo" />
            {footerLinks[0].data.footerCol3.links.map((aLink) => (
              <Link href={aLink.linkUrl}>
                <a>{aLink.linkLabel}</a>
              </Link>
            ))}
          </div>
          <div className={`${styles.footerColD} ${styles.footerCol}`}>
            {footerLinks[0].data.footerCol4.socialLinks.map((aLink) => {
              switch (aLink.linkIcon) {
                case 'facebook':
                  return (
                    <a href={aLink.linkUrl}>
                      <FaceBookIcon />
                    </a>
                  )
                  break

                case 'instagram':
                  return (
                    <a href={aLink.linkUrl}>
                      <InstagramIcon />
                    </a>
                  )
                  break

                case 'linkedin':
                  return (
                    <a href={aLink.linkUrl}>
                      <LinkedInIcon />
                    </a>
                  )
                  break

                default:
                  break
              }
            })}
          </div>
          <div className={`${styles.footerColE} ${styles.footerCol}`}>
            <a mailto={footerLinks[0].data.footerCol5.emailaddress}>
              {footerLinks[0].data.footerCol5.emailaddress}
            </a>
            <p>{footerLinks[0].data.footerCol5.location}</p>
          </div>
        </div>
        <div className={styles.footer__btmRow}>btm row</div>
      </footer>
    </>
  )
}

export default Footer
