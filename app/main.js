

window.onload = function() {
    player.init()
}

let player = {
    init: function() {
        const container = document.querySelector('.webgl')
        this.scene = new THREE.Scene()
        window.scene = this.scene

        let axisHelper = new THREE.AxisHelper(500)
        this.scene.add(axisHelper)

        let aspect = container.offsetWidth / container.offsetHeight
        this.camera = new THREE.PerspectiveCamera(60.0, aspect, 1, 100)
        this.camera.position.z = 20
        this.scene.add(this.camera)

        let light = new THREE.AmbientLight()
        this.scene.add(light)

        this.renderer = new THREE.WebGLRenderer()
        container.append(this.renderer.domElement)
        this.renderer.setPixelRatio(window.devicePixel)
        this.renderer.setSize(container.offsetWidth, container.offsetHeight)

        let geometry = new THREE.SphereGeometry(5, 10, 10)
        let material = new THREE.MeshPhongMaterial({color: 0X346634})
        let mesh = new THREE.Mesh(geometry, material)

        this.controls = new THREE.TrackballControls(this.camera, container)
        this.controls.zoomSpeed = 0.1

        this.scene.add(mesh)

        this.animate()

    },
    animate: function() {
        requestAnimationFrame(this.animate.bind(this))
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }
}