const main = (content: string) => `
  <div style="padding: 2rem;">
    <div
      style="padding: 2rem 0; border: 1px solid #00AB55; border-radius: 8px;">
      <h1 style="margin: 0; color: #00AB55; font-size: 4rem; text-align: center;">DEBUG</h1>
      <h6 style="margin: 0; color: #637381; text-align: center;">안녕하세요. DEBUG 밴드입니다.</h6>
      <hr style="margin: 2rem 0; width: 100%; height: 1px; border: none; background-color: #DFE3E8;">
      <div style="padding: 0 2rem;">
        <p style="color: #161C24; font-size: 0.8rem; font-weight: 500;">
          ${content}
        </p>
      </div>
      <hr style="margin: 2rem 0; width: 100%; height: 1px; border: none; background-color: #DFE3E8;">
      <div style="padding: 0 2rem;">
        <a href="https://debug-band.netlify.app/"
           target="_blank"
           style="padding: 0.8rem 1.5rem; display: block; color: #FFF; font-size: 0.8rem; font-weight: 600; text-align: center; text-decoration: none; border-radius: 10px; background-color: #00AB55;">
          공식 홈페이지
        </a>
      </div>
    </div>
  </div>
`

const template = {
  main,
}

export default template
