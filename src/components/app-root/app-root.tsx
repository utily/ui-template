import { Component, h } from "@stencil/core"
import "smoothly"
import { App } from "smoothly"

@Component({
	tag: "app-root",
	styleUrl: "app-root.css",
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<App label="Smoothly App Starter">
				<a slot="nav-start" href="">
					Home
				</a>
				<a slot="nav-start" href="about">
					About
				</a>
				<smoothly-trigger slot="header" type="link" name="logout">
					<smoothly-icon toolTip={"Log out"} name="log-out" size="medium"></smoothly-icon>
				</smoothly-trigger>
				<smoothly-room path="">
					<app-home />
				</smoothly-room>
				<smoothly-room path="about">
					<p>Template for smoothly app!</p>
				</smoothly-room>
			</App>
		)
	}
}
