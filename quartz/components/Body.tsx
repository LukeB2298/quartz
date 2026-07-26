import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {children}
      {/* Ko-fi floating donation widget */}
      <script
        src="https://storage.ko-fi.com/cdn/scripts/overlay-widget_1.js"
        data-id="lbpsystudy"
        data-text="Support my studies"
        data-color="#1a6b6f"
        data-position="Right"
        data-x-margin="18"
        data-y-margin="18"
        async
      />
    </div>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
