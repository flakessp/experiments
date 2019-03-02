<template>
<div class="flex-grid-center">
			<div class="mac-window">
				<div class="title-bar">
					<div class="bars-container">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</div>
					<div class="close"><div class="inner"></div></div>
					<div class="title">__</div>
				</div>
				<p>
					<slot/>
				</p>
			</div>
		</div>  
</template>

<style lang="css" scoped>
@font-face {
    font-family: Chicago;
    src: url('https://dl.dropbox.com/s/ueoh9twyvz4bwkr/ChicagoFLF.ttf?dl=0');
}

.flex-grid-center {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}

.mac-window {
	background: white;
	color: black;
	border: 1px solid black;
	width: 600px;
	border-radius: 1px;
	box-shadow: 1px 1px 0 black;
	font-family: Chicago;
}

.mac-window .title-bar {
	text-align: center;
	border-bottom: 1px solid black;
	width: 100%;
	position: relative;
}

.mac-window .title-bar .bars-container {
	display: flex;
	-webkit-flex-flow: column nowrap;
	flex-flow: column nowrap;
	justify-content: center;
	margin: 3px 1px 2px 1px; 
	position: relative;
}

.mac-window .title-bar .bars-container .bar {
	margin-bottom: 1px;
	border-bottom: 1px solid black;
	width: 100%;
}

.mac-window .title-bar .close {
	width: 13px;
	height: 13px;
	position: absolute;
	top: -1px;
	left: 7px;
	background: white;
	padding: 1px;
	z-index: 2;
}

.mac-window .title-bar .close .inner {
width: 100%;
height: 100%;
border: 1px solid black;
}

.mac-window .title-bar .title {
	display: inline;
	position: absolute;
	top: -3px;
	left: 50%;
	transform: translateX(-50%);
	box-sizing: none;
	padding: 0 6px;
	background: white;
	font-size: .8em;
	height: 100%;
	white-space: nowrap;
	overflow: hidden;
}

.mac-window p {
	padding: 1em;
}

</style>
