/**
 * Other props for stable diffusion that don't required to be configured
 */
export class StableBasicProps {
    /**
     * Basic class constructor
     */
    constructor() {
        this.enable_hr = false;
        this.denoising_strength = 0;
        this.firstphase_width = 0;
        this.firstphase_height = 0;
        this.hr_scale = 2;
        this.hr_upscaler = "";
        this.hr_second_pass_steps = 0;
        this.hr_resize_x = 0;
        this.hr_resize_y = 0;
        this.styles = [];
        this.subseed = -1;
        this.subseed_strength = 0;
        this.seed_resize_from_h = -1;
        this.seed_resize_from_w = -1;
        this.sampler_name = "";
        this.batch_size = 1;
        this.n_iter = 1;
        this.steps = 20;
        this.cfg_scale = 7;
        this.restore_faces = false;
        this.tiling = false;
        this.do_not_save_samples = false;
        this.do_not_save_grid = false;
        this.eta = 0;
        this.s_churn = 0;
        this.s_tmax = 0;
        this.s_tmin = 0;
        this.s_noise = 1;
        this.override_settings = {};
        this.override_settings_restore_afterwards = true;
        this.script_args = [];
        this.sampler_index = "DPM++ 2M Karras";
        this.script_name = "";
        this.send_images = true;
        this.save_images = false;
        this.alwayson_scripts = {};
    }
    enable_hr: false;
    denoising_strength: 0;
    firstphase_width: 0;
    firstphase_height: 0;
    hr_scale: 2;
    hr_upscaler: "";
    hr_second_pass_steps: 0;
    hr_resize_x: 0;
    hr_resize_y: 0;
    styles: [];
    subseed: -1;
    subseed_strength: 0;
    seed_resize_from_h: -1;
    seed_resize_from_w: -1;
    sampler_name: "";
    batch_size: 1;
    n_iter: 1;
    steps: 20;
    cfg_scale: 7;
    restore_faces: false;
    tiling: false;
    do_not_save_samples: false;
    do_not_save_grid: false;
    eta: 0;
    s_churn: 0;
    s_tmax: 0;
    s_tmin: 0;
    s_noise: 1;
    override_settings: {};
    override_settings_restore_afterwards: true;
    script_args: [];
    sampler_index: "DPM++ 2M Karras";
    script_name: "";
    send_images: true;
    save_images: false;
    alwayson_scripts: {};
}