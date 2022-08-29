import './App.css';
import {categories} from "./inputCategories.js"
import {Button, Cascader, Form, Input, Spin} from "antd";
import 'antd/dist/antd.css'
import {useState} from "react";

function App() {
    const [values, setValues] = useState([])
    const [result, setResult] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const isInValues = (category, type, name) => {
        let result = 0
        values.forEach(value => {
            if (
                value.includes(name) ||
                (value.length === 2 && value.includes(type)) ||
                (value.length === 1 && value.includes(category))
            ) {
                result = 1;
                return 0
            }
        })

        return result
    }

    const sendData = () => {
        setIsLoading(true)
        const body = {
          programming_languages: {
              java: isInValues("skills", "programming_languages", "java"),
              kotlin: isInValues("skills", "programming_languages", "kotlin"),
              xml: isInValues("skills", "programming_languages", "xml"),
              swift: isInValues("skills", "programming_languages", "swift"),
              r: isInValues("skills", "programming_languages", "r"),
              python: isInValues("skills", "programming_languages", "python"),
              php: isInValues("skills", "programming_languages", "php"),
              javascript: isInValues("skills", "programming_languages", "javascript"),
              html: isInValues("skills", "programming_languages", "html"),
              css: isInValues("skills", "programming_languages", "css"),
              go: isInValues("skills", "programming_languages", "go"),
              cpp: isInValues("skills", "programming_languages", "cpp"),
              c: isInValues("skills", "programming_languages", "c"),
              csharp: isInValues("skills", "programming_languages", "csharp"),
              ruby: isInValues("skills", "programming_languages", "ruby"),
              perl: isInValues("skills", "programming_languages", "perl"),
              bash: isInValues("skills", "programming_languages", "bash"),
              scala: isInValues("skills", "programming_languages", "scala")
          },
          backend_frameworks: {
              backend_development: isInValues("skills", "backend_frameworks", "backend_development"),
              asp: isInValues("skills", "backend_frameworks", "asp"),
              django: isInValues("skills", "backend_frameworks", "django"),
              spring: isInValues("skills", "backend_frameworks", "spring"),
              laravel: isInValues("skills", "backend_frameworks", "laravel"),
              node: isInValues("skills", "backend_frameworks", "node"),
              express: isInValues("skills", "backend_frameworks", "express")
          },
          devops: {
              devops: isInValues("skills", "devops", "devops"),
              kubernetes: isInValues("skills", "devops", "kubernetes"),
              docker: isInValues("skills", "devops", "docker"),
              ansible: isInValues("skills", "devops", "ansible"),
              infrastructure: isInValues("skills", "devops", "infrastructure"),
              google_cloud_platform: isInValues("skills", "devops", "google_cloud_platform"),
              azure: isInValues("skills", "devops", "azure"),
              containerization: isInValues("skills", "devops", "containerization"),
              aws: isInValues("skills", "devops", "aws"),
              jenkins: isInValues("skills", "devops", "jenkins"),
              ci_cd: isInValues("skills", "devops", "ci_cd"),
              cloud: isInValues("skills", "devops", "cloud")
          },
          frontend_frameworks: {
              react: isInValues("skills", "frontend_frameworks", "react"),
              vue: isInValues("skills", "frontend_frameworks", "vue"),
              angular: isInValues("skills", "frontend_frameworks", "angular"),
              redux: isInValues("skills", "frontend_frameworks", "redux"),
              ajax: isInValues("skills", "frontend_frameworks", "ajax"),
              jquery: isInValues("skills", "frontend_frameworks", "jquery"),
              bootstrap: isInValues("skills", "frontend_frameworks", "bootstrap")
          },
          system_design_skills: {
              mobile_application: isInValues("skills", "system_design_skills", "mobile_application"),
              oop: isInValues("skills", "system_design_skills", "oop"),
              design_patterns: isInValues("skills", "system_design_skills", "design_patterns"),
              software_engineering: isInValues("skills", "system_design_skills", "software_engineering"),
              programming: isInValues("skills", "system_design_skills", "programming"),
              algorithm: isInValues("skills", "system_design_skills", "algorithm"),
              web_development: isInValues("skills", "system_design_skills", "web_development"),
              web_applications: isInValues("skills", "system_design_skills", "web_applications"),
              microservices: isInValues("skills", "system_design_skills", "microservices"),
              software_testing: isInValues("skills", "system_design_skills", "software_testing"),
              uml: isInValues("skills", "system_design_skills", "uml")
          },
          version_controls: {
              git: isInValues("skills", "version_controls", "git")
          },
          ui_ux: {
              graphic_design: isInValues("skills", "ui_ux", "graphic_design"),
              illustrator: isInValues("skills", "ui_ux", "illustrator"),
              figma: isInValues("skills", "ui_ux", "figma"),
              photoshop: isInValues("skills", "ui_ux", "photoshop"),
              ui_ux: isInValues("skills", "ui_ux", "ui_ux")
          },
          data_related: {
              data_integration: isInValues("skills", "data_related", "data_integration"),
              big_data: isInValues("skills", "data_related", "big_data"),
              data: isInValues("skills", "data_related", "data"),
              spark: isInValues("skills", "data_related", "spark"),
              information_retrieval: isInValues("skills", "data_related", "information_retrieval"),
              data_visualization: isInValues("skills", "data_related", "data_visualization"),
              selenium: isInValues("skills", "data_related", "selenium"),
              pyspark: isInValues("skills", "data_related", "pyspark"),
              mapreduce: isInValues("skills", "data_related", "mapreduce"),
              zeppelin: isInValues("skills", "data_related", "zeppelin"),
              hadoop: isInValues("skills", "data_related", "hadoop"),
              sqoop: isInValues("skills", "data_related", "sqoop"),
              tableau: isInValues("skills", "data_related", "tableau"),
              hdfs: isInValues("skills", "data_related", "hdfs"),
              oozie: isInValues("skills", "data_related", "oozie"),
              data_warehousing: isInValues("skills", "data_related", "data_warehousing"),
              ambari: isInValues("skills", "data_related", "ambari"),
              impala: isInValues("skills", "data_related", "impala"),
              snowflake: isInValues("skills", "data_related", "snowflake")
          },
          databases: {
              data_migration: isInValues("skills", "databases", "data_migration"),
              mongodb: isInValues("skills", "databases", "mongodb"),
              database_design: isInValues("skills", "databases", "database_design"),
              no_sql: isInValues("skills", "databases", "no_sql"),
              my_sql: isInValues("skills", "databases", "my_sql"),
              postgre_sql: isInValues("skills", "databases", "postgre_sql"),
              graph_ql: isInValues("skills", "databases", "graph_ql"),
              elastic_search: isInValues("skills", "databases", "elastic_search"),
              redis: isInValues("skills", "databases", "redis"),
              data_center: isInValues("skills", "databases", "data_center"),
              maria_db: isInValues("skills", "databases", "maria_db"),
              oracle: isInValues("skills", "databases", "oracle"),
              sql: isInValues("skills", "databases", "sql")
          },
          ai_modeling: {
              ai: isInValues("skills", "ai_modeling", "ai"),
              regression_testing: isInValues("skills", "ai_modeling", "regression_testing"),
              predictive_modeling: isInValues("skills", "ai_modeling", "predictive_modeling"),
              machine_learning: isInValues("skills", "ai_modeling", "machine_learning"),
              image_processing: isInValues("skills", "ai_modeling", "image_processing"),
              data_science: isInValues("skills", "ai_modeling", "data_science"),
              nlp: isInValues("skills", "ai_modeling", "nlp"),
              data_modeling: isInValues("skills", "ai_modeling", "data_modeling"),
              computer_vision: isInValues("skills", "ai_modeling", "computer_vision"),
              big_data: isInValues("skills", "ai_modeling", "big_data"),
              deep_learning: isInValues("skills", "ai_modeling", "deep_learning"),
              data_mining: isInValues("skills", "ai_modeling", "data_mining"),
              data_analysis: isInValues("skills", "ai_modeling", "data_analysis"),
              ml_ops: isInValues("skills", "ai_modeling", "ml_ops"),
              supervised_learning: isInValues("skills", "ai_modeling", "supervised_learning"),
              recommender_systems: isInValues("skills", "ai_modeling", "recommender_systems"),
              data_preprocessing: isInValues("skills", "ai_modeling", "data_preprocessing")
          },
          ai_frameworks: {
              pandas: isInValues("skills", "ai_frameworks", "pandas"),
              pytorch: isInValues("skills", "ai_frameworks", "pytorch"),
              keras: isInValues("skills", "ai_frameworks", "keras"),
              tensorflow: isInValues("skills", "ai_frameworks", "tensorflow"),
              scikit_learn: isInValues("skills", "ai_frameworks", "scikit_learn"),
              seaborn: isInValues("skills", "ai_frameworks", "seaborn")
          },
          network_skills: {
              dhcp: isInValues("skills", "network_skills", "dhcp"),
              dns: isInValues("skills", "network_skills", "dns"),
              routing_protocols: isInValues("skills", "network_skills", "routing_protocols"),
              routers: isInValues("skills", "network_skills", "routers"),
              cisco: isInValues("skills", "network_skills", "cisco"),
              wireless: isInValues("skills", "network_skills", "wireless"),
              vpn: isInValues("skills", "network_skills", "vpn"),
              switching: isInValues("skills", "network_skills", "switching"),
              network_security: isInValues("skills", "network_skills", "network_security"),
              lan_wan: isInValues("skills", "network_skills", "lan_wan"),
              penetration_testing: isInValues("skills", "network_skills", "penetration_testing"),
              network_administration: isInValues("skills", "network_skills", "network_administration"),
              ip: isInValues("skills", "network_skills", "ip"),
              tcp_ip: isInValues("skills", "network_skills", "tcp_ip")
          },
          hardware_skills: {
              fpga: isInValues("skills", "hardware_skills", "fpga"),
              pcb: isInValues("skills", "hardware_skills", "pcb"),
              vlsi: isInValues("skills", "hardware_skills", "vlsi"),
              iot: isInValues("skills", "hardware_skills", "iot"),
              circuit_design: isInValues("skills", "hardware_skills", "circuit_design"),
              embedded: isInValues("skills", "hardware_skills", "embedded"),
              computer_architecture: isInValues("skills", "hardware_skills", "computer_architecture"),
              pspice: isInValues("skills", "hardware_skills", "pspice"),
              micro_controller: isInValues("skills", "hardware_skills", "micro_controller"),
              controller_area_network: isInValues("skills", "hardware_skills", "controller_area_network"),
              signal_processing: isInValues("skills", "hardware_skills", "signal_processing"),
              raspberry_pi: isInValues("skills", "hardware_skills", "raspberry_pi"),
              verilog: isInValues("skills", "hardware_skills", "verilog"),
              stm32: isInValues("skills", "hardware_skills", "stm32"),
              arm: isInValues("skills", "hardware_skills", "arm"),
              xilinx: isInValues("skills", "hardware_skills", "xilinx"),
              arduino: isInValues("skills", "hardware_skills", "arduino"),
              simulink: isInValues("skills", "hardware_skills", "simulink"),
              matlab: isInValues("skills", "hardware_skills", "matlab"),
              vhdl: isInValues("skills", "hardware_skills", "vhdl"),
              proteus: isInValues("skills", "hardware_skills", "proteus")
          },
          education: {
              bachelor_computer: isInValues("education", null, "bachelor_computer"),
              master_computer: isInValues("education", null, "master_computer"),
              phd_computer: isInValues("education", null, "phd_computer"),
              other_major: isInValues("education", null, "other_major")
          },
          experience: {
              data_scientist: isInValues("experience", null, "data_scientist"),
              ui_ux_designer: isInValues("experience", null, "ui_ux_designer"),
              network_engineer: isInValues("experience", null, "network_engineer"),
              data_engineer: isInValues("experience", null, "data_engineer"),
              software_engineer: isInValues("experience", null, "software"),
              frontend_developer: isInValues("experience", null, "frontend_developer"),
              hardware_engineer: isInValues("experience", null, "hardware_engineer"),
              devops_engineer: isInValues("experience", null, "devops_engineer"),
              database_administrator: isInValues("experience", null, "database_administrator")
          }
        }
        fetch("http://localhost:8080/predict", {
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => {
          setValues([])
          setResult(data.job)
          setIsLoading(false)
        })
    }

    return (
        <div className="app" style={{height: window.innerHeight}}>
            <div className='content'>
              <Form name='form' labelCol={{span: 2}}>
                <Form.Item label="Full Name" name="fullname">
                  <Input placeholder='Full Name' />
                </Form.Item>
                <Form.Item label="About" name="about">
                  <Input.TextArea placeholder='About' className='about' />
                </Form.Item>
                <Form.Item label="Attributes" name="attributes">
                  <Cascader placeholder="Attributes" multiple options={categories} onChange={(value) => setValues(value)} value={values}/>
                </Form.Item>
                <Form.Item name="submit" className='submit'>
                  <Button type="primary" shape='round' size='large' onClick={sendData}>Predict</Button>
                </Form.Item>
              </Form>
            </div>
            <Spin wrapperClassName='result' spinning={isLoading}>
              <h1>RESULT: {result}</h1>
            </Spin>
        </div>
    );
}

export default App;
