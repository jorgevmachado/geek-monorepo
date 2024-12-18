RUN:=yarn

# STYLE #
ERROR=\x1b[41m
SUCCESS=\x1b[42m
RESET=\x1b[0m
WARN=\x1b[30;43m

#-------------------------------------------- FUNCTIONS ---------------------------------------------------------------#
define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./$(1)/node_modules
endef

define delete_dependencies_build
	@echo delete_build $(1)
	rm -Rf ./$(1)/dist
endef

define delete_in_project
	@echo delete_in_project $(1) item $(2)
	rm -Rf ./$(1)/$(2)
endef

define run_project
	@echo run_project $(1) action $(2)
	cd ./$(1) && $(RUN) $(2)
endef

define run_in_workspace
	@echo ------------------------------------------------------------------------------;
	@printf "${WARN} RUNNING ${RESET}: $(1) - $(2) $(3)\n";
	@echo ;
	@$(RUN) workspace @geek/$(1) $(2) $(3)

	@if [ $$? -eq 0 ]; then \
		printf "${SUCCESS} SUCCESS ${RESET}: $(1) - $(2) $(3)\n"; \
		echo ------------------------------------------------------------------------------; \
	fi;
endef

.PHONY: run
run:
	$(eval PROJECT := $(word 2, $(MAKECMDGOALS)))
	$(eval CMD := $(word 3, $(MAKECMDGOALS)))
	$(eval PARAMS := $(word 4, $(MAKECMDGOALS)))
	$(if $(strip $(PARAMS)), \
		$(call run_in_workspace,$(PROJECT),$(CMD),--base=/${PARAMS}/), \
		$(call run_in_workspace,$(PROJECT),$(CMD)))

%:
	@:

#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- CLEAN --------------------------------------------------------------#
clean-dependencies:
	rm -rf ./node_modules
	$(call delete_in_project,packages/business,node_modules)
	$(call delete_in_project,packages/services,node_modules)
	$(call delete_in_project,packages/ui,node_modules)
	$(call delete_in_project,packages/eslint-config,node_modules)
	$(call delete_in_project,packages/tokens,node_modules)

services-clean:
	$(call delete_in_project,packages/services,dist)

tokens-clean:
	$(call delete_in_project,packages/tokens,dist)

business-clean:
	$(call delete_in_project,packages/business,dist)

typescript-config-clean:
	$(call delete_in_project,packages/typescript-config,dist)

ui-clean:
	$(call delete_in_project,packages/ui,dist)

clean-builds:
	make services-clean
	make tokens-clean
	make business-clean
	make typescript-config-clean
	make ui-clean

clean-all: clean-dependencies clean-builds
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- BUILD --------------------------------------------------------------#
nest-build:
	$(call run_project,apps/nest-api,build)

next-build:
	$(call run_project,apps/react-next,build)

vite-build:
	$(call run_project,apps/react-vite,build)

business-build-dirty:
	make business-clean
	$(call run_project,packages/business,build)

business-build:
	make business-clean
	$(call run_project,packages/business,build)

services-build-dirty:
	make services-clean
	$(call run_project,packages/services,build)

services-build:
	make services-clean
	$(call run_project,packages/services,build)

ui-build-dirty:
	make ui-clean
	$(call run_project,packages/ui,build)

ui-build:
	make ui-clean
	$(call run_project,packages/ui,build)

tokens-build-dirty:
	make tokens-clean
	$(call run_project,packages/tokens,build)

tokens-build:
	make tokens-clean
	$(call run_project,packages/tokens,build)

build-dependencies-dirty:
	make services-build-dirty
	make tokens-build-dirty
	make business-build-dirty
	make ui-build-dirty

build-dependencies:
	make services-build
	make tokens-build
	make business-build
	make ui-build
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- GENERATE -----------------------------------------------------------#
ui-generate-component:
	$(call run_project,packages/ui,generate:component)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- INSTALL ------------------------------------------------------------#
install:
	yarn
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- DEV ----------------------------------------------------------------#
dev:
	turbo dev

next-dev:
	$(call run_project,apps/react-next,dev)
#------------------------------------------------- END ----------------------------------------------------------------#

#----------------------------------------------- STORYBOOK ------------------------------------------------------------#
ui-storybook:
	$(call run_project,packages/ui,storybook)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- LINT ---------------------------------------------------------------#
lint:
	turbo lint

next-lint:
	$(call run_project,apps/react-next,lint)

business-lint:
	$(call run_project,packages/business,lint)

services-lint:
	$(call run_project,packages/services,lint)

ui-lint:
	$(call run_project,packages/ui,lint)
#------------------------------------------------- END ----------------------------------------------------------------#

#------------------------------------------------- TEST ---------------------------------------------------------------#
#------------------------------------------------- END ----------------------------------------------------------------#
setup:
	make clean-all
	make install
	make build-dependencies-dirty

build:
	make build-dependencies